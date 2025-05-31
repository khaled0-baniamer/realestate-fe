"use client";
import { SearchParams } from "@/types";
import ListingsCards from "./ListingsCards";
import SearchBar from "./SearchBar";
import {
  setBathrooms,
  setBedrooms,
  setCity,
  setDistricts,
  setFurnishedType,
  setpriceTo,
  setMinPrice,
  setPropertyType,
  useAppDispatch,
  setPurpose,
} from "@/redux/slices";
import { useEffect } from "react";

type Props = {
  params: SearchParams;
};

const ListingsScreen: React.FC<Props> = ({ params }) => {
  const {
    bathroomId,
    bedroomId,
    districtId,
    furnishedId,
    priceFrom,
    priceTo,
    purpose,
    typeId,
    cityId,
  } = params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cityId) {
      dispatch(setCity(Number(cityId)));
    }
    if (bathroomId) {
      const baths = bathroomId?.split(",").map((e) => +e);
      dispatch(setBathrooms(baths));
    }
    if (bedroomId) {
      const beds = bedroomId.split(",").map((e) => +e);
      dispatch(setBedrooms(beds));
    }

    if (districtId) {
      const dist = districtId.split(",").map((e) => +e);
      dispatch(setDistricts(dist));
    }
    if (furnishedId) {
      const funished = furnishedId.split(",").map((e) => +e);
      dispatch(setFurnishedType(funished));
    }

    if (typeId) {
      const type = typeId.split(",").map((e) => +e);
      dispatch(setPropertyType(type));
    }

    if (priceFrom) {
      dispatch(setMinPrice(priceFrom));
    }

    if (priceTo) {
      dispatch(setpriceTo(priceTo));
    }

    if (purpose) {
      dispatch(setPurpose(purpose));
    }
  }, [params, dispatch]);

  return (
    <div>
      <SearchBar />
      <ListingsCards />
    </div>
  );
};

export default ListingsScreen;
