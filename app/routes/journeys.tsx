import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface Journeys {
  id: number;
  vehicle: Vehicle;
  country: string;
  description: string;
  departure: string;
  capacity: number;
  pictureUrl: string;
}

interface Vehicle {
  id: number;
  type: string | undefined;
}

function journeys() {
  const [journeys, setJourneys] = useState<Journeys[]>([]);
  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const response = await axios.get(
          "https://utazasi-iroda.jedlik.cloud/api/journeys"
        );
        setJourneys(response.data);
      } catch (err) {
        console.error("Error fetching journeys", err);
      }
    };

    fetchJourneys();
  }, []);
  return (
    <div>
      <h1>Kínálatunk</h1>
      <table>
        <tr>
          <th>Ország</th>
          <th>Utazási mód</th>
          <th>Indulás</th>
          <th>Max. létszám</th>
          <th>Leírás</th>
          <th>Fénykép</th>
        </tr>
        {journeys?.map((j) => (
          <tr key={j.id}>
            <td>{j.country}</td>
            <td>{j.vehicle?.type}</td>
            <td>{j.departure}</td>
            <td>{j.capacity}</td>
            <td>
              {j.description}{" "}
              <Link
                to={"/registration"}
                className="bg-gray-400 rounded-2xl p-2"
              >
                Érdekel
              </Link>
            </td>
            <td>
              <img src={j.pictureUrl} alt={j.country} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default journeys;
