import chai from "chai";
import React from "react";
import App from "../../../src/ui-core/components/App";
import { shallow } from "enzyme";

let expect = chai.expect;
describe("<App/>", () => {
	it("contain a start new game button", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(".start-new-game")).length(1);
	});
});
