const { onCreateBabelConfig } = require(`../gatsby-node`);

describe(`gatsby-plugin-import`, () => {
  const SUPPORT_LIB_OPTIONS = {
    antd: {
      libraryDirectory: "lib",
      style: true,
      customName: jest.fn()
    },
    "antd-mobile": {
      libraryDirectory: "lib",
      style: true
    },
    lodash: {
      camel2DashComponentName: false
    },
    "@material-ui/core": {
      libraryDirectory: "components", // default: lib
      camel2DashComponentName: false
    }
  };

  const actions = {
    setBabelPlugin: jest.fn()
  };

  beforeEach(() => {
    actions.setBabelPlugin.mockReset();
  });

  Object.entries(SUPPORT_LIB_OPTIONS).forEach(([libraryName, options]) => {
    it(`Lib: ${libraryName}`, () => {
      onCreateBabelConfig({ actions }, options);
      expect(actions.setBabelPlugin).toMatchSnapshot();
    });
  });

  it(`Muti Lib`, () => {
    onCreateBabelConfig({ actions }, SUPPORT_LIB_OPTIONS['antd']);
    onCreateBabelConfig({ actions }, SUPPORT_LIB_OPTIONS['lodash']);
    expect(actions.setBabelPlugin).toMatchSnapshot();
  })
});
