// @ts-nocheck

import Category from "./shopBy/Category";
import Brand from "./shopBy/Brand"
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
     
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
