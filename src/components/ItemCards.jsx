import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./../index.css";

export default function ItemCards(props) {
  const { imageSrc, title, price } = props;
  return (
    <div>
      <Card className="bg-blue-900">
        <CardHeader shadow={false} floated={false} className="h-58">
          <div className="h-full w-full aspect-w-4 aspect-h-3">
            <img
              src={imageSrc}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography color="white" className="font-bold text-sm">
              {title}
            </Typography>
            <Typography color="white" className="font-bold text-sm">
              {price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-white text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
