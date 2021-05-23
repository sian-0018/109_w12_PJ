import Head from 'next/head';
import { useRouter } from 'next/router';

import { getFeaturedEvents } from '../../../dummy-data';
import EventList from '../../../components/events/event-list';
import NewsletterRegistration from '../../../components/input/newsletter-registration';
import Nav from '../../../components/layout/Nav';
import EventsSearch from '../../../components/events/events-search';


function HomePage(props) {

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      <Nav/>
      <EventsSearch onSearch={findEventsHandler} />
      {/* <NewsletterRegistration /> */}
      <EventList items={props.events} />
    </div>
  );
}



export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
