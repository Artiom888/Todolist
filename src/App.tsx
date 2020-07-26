import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return <div className={"App"}>
        {/*<OnOff on={switchOn} onChange={  setSwitchOn } />*/}
        <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

        <UncontrolledAccordion titleValue={"UNMenu"} />
        <Accordion titleValue={"Menu"}
                   collapsed={accordionCollapsed}
                   onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} } />

        <Rating value={ratingValue} onClick={setRatingValue} />
        <UncontrolledRating />
        {/*<Rating value={3}/>*/}
        {/*<UncontrolledAccordion titleValue={"Users"} />
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        Article 1

        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>*/}
    </div>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
