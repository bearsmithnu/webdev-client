"use client";

import "./index.css";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import DateStateVariable from "./DateStateVariable";
import Link from "next/link";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
  const sayHello = (msg: string) => {
    alert(msg);
  };
  const myName = () => {
    alert("BEAR");
  };
  const thatFunction = () => {
    alert("Sample from parent");
  };

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message={"Hello from Lab 4"}
        theFunction={sayHello}
        secondFunc={myName}
        theOtherFunction={thatFunction}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <Link href="/labs/lab4/url-encoding/path-params/5/4">Path params</Link>
      <Link href="/labs/lab4/url-encoding/query-params?a=5&b=3">Query params</Link>
      <Link href="/labs/lab4/url-encoding/path-params/5/4/2">Path params with three</Link>
      <Link href="/labs/lab4/url-encoding/query-params?a=5&b=3&c=3">Query params with three</Link>
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}
