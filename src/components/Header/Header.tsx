import { component$, useStylesScoped$ } from "@builder.io/qwik";
import STYLES from './styles.css?inline';

export const Header = component$( () => {

    useStylesScoped$(STYLES);

    return (<header class="header">
            <h2 class="header_title--primary"> C'mon Qwik-ly, do smthg!  </h2>
            <h3 class="header_title--secondary">A simple but cute <span> qwik-app</span> to plan your next activity </h3>
            </header>)
});