import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/Card";
import type {Activity} from '../domain/Activity';
import STYLES from './styles.css?inline';

const URL = 'https://www.boredapi.com/api/activity'

export default component$( () => {
    
  
  const useGetActivity = routeLoader$( async() => { 
    const response = await fetch(URL);
    const data =  await response.json() 
    return data as Activity;
  });

  const activity = useGetActivity();
  useStylesScoped$(STYLES);


  return (<section class="main">
            <p class="main_title"> Don't you know what to do? Try <span class="main_title--highlight">this!</span></p>
            <Card {...activity.value} />
          </section>)
})