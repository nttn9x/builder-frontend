import React, { useMemo } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Slider } from "components/ui-own";

import EmptySlide from "./slider-item-empty.component";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(3),
    },
  })
);

const CategorySlider = ({ data }: any) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const empty = useMemo(() => {
    return !data || data.length < 1;
  }, [data]);

  return (
    <div className={classes.root}>
      {empty && (
        <Slider {...settings}>
          <EmptySlide index={1} />
          <EmptySlide index={2} />
          <EmptySlide index={3} />
        </Slider>
      )}
    </div>
  );
};

export default CategorySlider;
