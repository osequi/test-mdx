import React from "react";
import Test from "./Test";

export default {
  component: Test,
  title: "Test",
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};
