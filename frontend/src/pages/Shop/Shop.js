// @ts-nocheck
import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

const Shop = () => {
  const [user, loading] = useAuthState(auth);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  
  
    return (
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Products" />
        {/* ================= Products Start here =================== */}
        {user && (
          <div className="w-full h-full flex pb-20 gap-10">
            <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
              {/* <ShopSideNav /> */}
            </div>
            <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
              <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
              <Pagination itemsPerPage={itemsPerPage} />
            </div>
          </div>
        )}
        {/* ================= Products End here ===================== */}
      </div>
    );
  
};

export default Shop;
