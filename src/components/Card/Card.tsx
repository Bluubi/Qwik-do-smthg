import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Activity } from "~/domain/Activity";
import STYLE from './card.css?inline';

export const Card = component$<Activity>( (props) => {

    const { activity, participants, type, price } = props;
    
    useStylesScoped$(STYLE);

    return (<div class="card"> 
    <div class="card_block card_block--header"> 
        <p>Activity</p>
        <small>Check the information below!</small>
    </div>
    <div class="card_block--content">
        <div class="card_content">
            <p class="content_cell content_cell--title"> Activity name</p>
            <p class="content_cell content_cell--description">{ activity}</p>
        </div>
        <div class="card_content">
            <p class="content_cell content_cell--title">Minimum number of participants</p>
            <p class="content_cell content_cell--description">{ participants }</p>
        </div>
        <div class="card_content">
            <p class="content_cell content_cell--title">Activity type</p>
            <p class="content_cell content_cell--description">{ type }</p>
        </div>
        <div class="card_content">
            <p class="content_cell content_cell--title">Activity price</p>
            <p class="content_cell content_cell--description">{ price }</p>
        </div>
    </div>
     </div>)
});