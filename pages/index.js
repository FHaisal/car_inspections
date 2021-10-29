import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getMockData} from "../data/return_data";

export default function Home({ inspections }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Car Inspections Dummy Data</title>
        <meta name="description" content="Dummy data for car inspections power app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Car Inspections Dummy Data
        </h1>

        <p className={styles.description}>
          You can access 1,000 records of the dummy data within
          <code className={styles.code}>api/inspections</code>, here is a preview of the first 50 rows
        </p>

        <table className={styles.inspections}>
          <tr>
            <th>Reference</th>
            <th>Bay</th>
            <th>Status</th>
            <th>Number Plate</th>
            <th>Car Make</th>
            <th>Car Model</th>
          </tr>

          {
            inspections.map(inspection =>
              (
                <tr key={inspection.Reference}>
                  <td>{inspection.Reference}</td>
                  <td>{inspection.Bay}</td>
                  <td>{inspection.Status}</td>
                  <td>{inspection.NumberPlate}</td>
                  <td>{inspection.CarMake}</td>
                  <td>{inspection.CarModel}</td>
                </tr>
              )
            )
          }
        </table>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const inspections = getMockData().slice(0, 50);

  if (!inspections) {
    return {
      notFound: true,
    }
  }

  return {
    props: { inspections },
  }
}