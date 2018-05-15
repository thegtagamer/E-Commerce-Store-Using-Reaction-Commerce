import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Reaction Swag Shop",
  name: "abhisheks-shop",
  icon: "fa fa-bars",
  autoEnable: true,
  settings: {
    autoRefreshInterval: "1 hour"
  },
  registry: []
});
