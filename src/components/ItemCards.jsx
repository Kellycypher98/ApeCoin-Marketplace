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

export default function ItemCards() {
  return (
    <div>
      <Card className="w-1/4 ">
        <CardHeader shadow={false} floated={false} className="h-58">
          <img
            src="src/assets/apecoin tee.jpg"
            alt="card-image"
            className="h-full w-full object-fill"
          />
        </CardHeader>
        <CardBody>
          <div className=" flex flex-col items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              New ApeCoin Logo T-shirt
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              $95.00
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
