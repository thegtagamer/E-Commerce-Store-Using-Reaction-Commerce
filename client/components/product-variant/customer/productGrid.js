import React from "react";
import PropTypes from "prop-types";
import { Components } from "@reactioncommerce/reaction-components";
import ProductGridCore from "/imports/plugins/included/product-variant/components/customer/productGrid";
import { Reaction } from "/client/api/index";
import { ReactionProduct, Logger } from "/lib/api";


class ProductGrid extends ProductGridCore {
  static propTypes = {
    canLoadMoreProducts: PropTypes.bool,
    loadProducts: PropTypes.func,
    products: PropTypes.array,
    productsSubscription: PropTypes.object
  }

  constructor(...args) {
    super(...args);
    this.tagRouteSlug = Reaction.Router.getParam("slug");
  }

  heroClicked = () => {
    Logger.info("clicked");
  }

  renderHero() {
    if (this.tagRouteSlug) {
      // Tag route
      const tag = this.props.tags.find((x) => x.slug === this.tagRouteSlug);
      return (
        <div className="cat-hero" style={{ backgroundImage: `url('/plugins/abhisheks-shop/${tag.catHeroImageUrl}')` }} >
          <div className="cat-hero-wrapper">
            <div className="cat-hero-slogan">
              <Components.Translation defaultValue={"Lorem ipsum"} i18nKey={tag.catHeroSloganI18nKey} />
            </div>
            <div className="cat-hero-huge-text">
              <Components.Translation defaultValue={"Nuro laudio vid pastum"} i18nKey={tag.catHeroTitleI18nKey} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-slogan">
            <Components.Translation defaultValue={"Start Shopping today."} i18nKey={"startshoppingtoday"} />
          </div>
          <div className="hero-huge-text">
            <Components.Translation defaultValue={"Providing you the best outfitss."} i18nKey={"providingyouthebestoutfits"} />
          </div>
          <Components.Button
            className="hero__button"
            label={"Check Products"}
            i18nKeyLabel={"checkProducts"}
            bezelStyle={"solid"}
            primary={true}
            type="button"
            onClick={this.heroClicked}
          />
        </div>
      </div>
    );
  }

  renderProductGridItems() {
    const { products } = this.props;
    if (Array.isArray(products)) {
      // Render image only for tag route
      if (this.tagRouteSlug) {
        const insertAt = (products.length && Math.ceil(products.length / 2)) || 0;
        products.splice(insertAt, 0, { src: "/plugins/abhisheks-shop/mountain-road.jpg" });
      }
      const currentTag = ReactionProduct.getTag();
      return products.map((product, index) => {
        if (product.src) {
          return (
            <li key={index} className={"product-grid-item product-medium"}>
              <img className={"filler-img"} alt={"Road in the mountains."} src={product.src} />
            </li>
          );
        }
        return (
          <Components.ProductGridItemCustomer
            key={product._id}
            product={product}
            position={(product.positions && product.positions[currentTag]) || {}}
            showFeaturedLabel={true}
            {...this.props}
          />
        );
      });
    }
    return (
      <div className="row">
        <div className="text-center">
          <h3>
            <Components.Translation defaultValue="No Products Found" i18nKey="app.noProductsFound" />
          </h3>
        </div>
      </div>
    );
  }

  renderCategory(tag) {
    return (
      <div className={"cat-tile col-xs-12"} key={tag._id}>
        <a href={`/tag/${tag.slug}`}>
          <img alt={tag.name} src={`/plugins/abhisheks-shop/${tag.catTileImageUrl}`} />
          <span className={"category"}>{tag.name}</span>
        </a>
      </div>
    );
  }

  renderCategoryChunks(tags) {
    const chunkSize = 2;
    const chunks = [];
    for (let i = 0; i < tags.length; i += chunkSize) {
      const temp = tags.slice(i, i + chunkSize);
      let className = "col-sm-4";
      if (i === 0) {
        className += " col-sm-pull-4";
      }
      chunks.push(<div className={className} key={i}>
        {temp.map((element, index) => this.renderCategory(element, index))}
      </div>);
    }
    return chunks;
  }

  renderCategories() {
    return (
      <div>
        <div className={"cat-header"}>
        <h2><center>What we offer</center></h2>
        </div>
      <div className={"categories row"}>
        <div className={"cat-tile col-xs-12 col-sm-push-4 col-sm-4"}>
          <div className={"pic-essentials"}>
            <div className={"btn-essentials"}>
              <Components.Button
                className={"btn-blue"}
                label={"Shop all products"}
                i18nKeyLabel={"shopAllProducts"}
                icon={"fa fa-long-arrow-right"}
                iconAfter
                bezelStyle={"solid"}
                primary={false}
                type="button"
                onClick={this.heroClicked}
              />
            </div>
          </div>
        </div>
        {this.renderCategoryChunks(this.props.tags)}
      </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHero()}
        {!this.tagRouteSlug && this.props.tags && this.renderCategories()}
        <div className="container-main">
          {!this.tagRouteSlug &&
          <div className="row">
            <div className="text-center">
              <h3 className="products-we-love-header">
                <Components.Translation defaultValue="Products We Love" i18nKey="productsWeLove" />
              </h3>
            </div>
          </div>}
          <ul className="product-grid-list list-unstyled" id="product-grid-list">
            {this.renderProductGridItems()}
          </ul>
          {this.renderLoadingSpinner()}
          {this.renderNotFound()}
        </div>
        {this.renderWordOfTheDay()}
        {this.renderImageGallery()}
      </div>
    );
  }

  renderWordOfTheDay() {
    return (
      <div className={"word-of-the-day"}>
        <div className={"word-of-the-day-header"}>
          <Components.Translation defaultValue={"#BUYGOOD"} i18nKey={"buyGood"} />
        </div>
      
      </div>
    );
  }

   renderImageGallery() {
    return (
      
  <div className="row image-gallery">
         
      </div>
    );
  }
}

export default ProductGrid;