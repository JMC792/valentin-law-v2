import { Fragment } from "react";
import HomePage from "app/page";

export const metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
}
