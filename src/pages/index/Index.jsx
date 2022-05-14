import React from "react";
import "./Index.css";
import Feature from "../../components/feature/Feature";
import IconChat from "../../img/icon-chat.png";
import IconMoney from "../../img/icon-money.png";
import IconSecurity from "../../img/icon-security.png";
import { useDispatch, useSelector } from "react-redux";
import { getAPIData } from "../../redux/api";

export default function Index(){
    const data = useSelector(state => state.api);
    const dispatch = useDispatch();
    console.log(data);
    return(
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle" onClick={() => dispatch(getAPIData())}>No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open saving account with Argent Bank today !</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature icon={IconChat} alt="Chat Icon" title="You are our #1 priority" subtitle="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <Feature icon={IconMoney} alt="Money Icon" title="More savings means higher rates" subtitle="The more you save with us, the higher your interest rate will be!" />
                <Feature icon={IconSecurity} alt="Security Icon" title="Security you can trust" subtitle="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    );
}