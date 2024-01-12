import JsCookies from "js-cookie";

const Cookies = (() => {
  const get = (name: string | null) => {
    return name ? JsCookies.get(name) : JsCookies.get();
  };

  const set = (name: string, value: string) => {
    JsCookies.set(name, value);
  };

  return {
    get,
    set,
  };
})();

export default Cookies;
