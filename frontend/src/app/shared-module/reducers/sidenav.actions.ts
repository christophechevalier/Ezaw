function createSidenavAction(name?: string) {
  return {
    // Sidenav
    [`OPEN_SIDENAV_${name}`]: `OPEN_SIDENAV_${name}`,
    [`CLOSE_SIDENAV_${name}`]: `CLOSE_SIDENAV_${name}`,
    [`TOGGLE_SIDENAV_${name}`]: `TOGGLE_SIDENAV_${name}`,
    [`CLOSE_SIDENAV_IF_MOBILE_${name}`]: `CLOSE_SIDENAV_IF_MOBILE_${name}`,
    [`SET_SIDENAV_MODE`]: `SET_SIDENAV_MODE`
  }
};

export const SidenavActions = () => {
  return Object.assign(createSidenavAction('LEFT'), createSidenavAction('RIGHT'));
};
