"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface Journey {
  id: number;
  destination: string;
}

interface ReservationData {
  journeyId: number | undefined;
  name: string;
  email: string;
  numberOfParticipants: number | undefined;
  lastCovidVaccineDate: string;
  acceptedConditions: boolean;
}

function Registration() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [journeyId, setJourneyId] = useState<number | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfParticipants, setNumberOfParticipants] = useState<
    number | undefined
  >();
  const [lastCovidVaccineDate, setLastCovidVaccineDate] = useState("");
  const [acceptedConditions, setAcceptedConditions] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const response = await axios.get(
          "https://utazasi-iroda.jedlik.cloud/api/journeys/short"
        );
        setJourneys(response.data);
      } catch (err) {
        console.error("Error fetching journeys", err);
      }
    };

    fetchJourneys();
  }, []);

  const handleSubmit = async () => {
    const reservation: ReservationData = {
      journeyId,
      name,
      email,
      numberOfParticipants,
      lastCovidVaccineDate,
      acceptedConditions,
    };

    try {
      const response = await axios.post(
        "https://utazasi-iroda.jedlik.cloud/api/reserve",
        reservation,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert(`Sikeres rögzítés az alábbival: ${response.data.id}`);
      navigate("/journeys");
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <h1 className="text-center">Regisztráció</h1>
      <div className="form">
        <div className="data">
          <label htmlFor="journey">Utazás:</label>
          <select
            id="journey"
            onChange={(e) => setJourneyId(Number(e.target.value))}
            value={journeyId ?? ""}
          >
            <option value="">Kérem válasszon</option>
            {journeys.map((j) => (
              <option key={j.id} value={j.id}>
                {j.destination}
              </option>
            ))}
          </select>
        </div>

        <div className="data">
          <label htmlFor="name">Az Ön neve:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="data">
          <label htmlFor="email">Az Ön e-mail címe:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="data">
          <label htmlFor="numberOfParticipants">Résztvevők száma:</label>
          <input
            id="numberOfParticipants"
            type="number"
            min="1"
            value={numberOfParticipants ?? ""}
            onChange={(e) => setNumberOfParticipants(Number(e.target.value))}
          />
        </div>

        <div className="data">
          <label htmlFor="lastCovidVaccineDate">
            Utolsó COVID oltásának dátuma:
          </label>
          <input
            id="lastCovidVaccineDate"
            type="date"
            value={lastCovidVaccineDate}
            onChange={(e) => setLastCovidVaccineDate(e.target.value)}
          />
        </div>

        <div className="data">
          <input
            id="acceptedConditions"
            type="checkbox"
            checked={acceptedConditions}
            onChange={(e) => setAcceptedConditions(e.target.checked)}
          />
          <label htmlFor="acceptedConditions">
            Felhasználási feltételeket elfogadom
          </label>
        </div>

        <div className="data">
          <button
            type="button"
            onClick={handleSubmit}
            style={{ margin: "0 220px", width: "160px" }}
          >
            Küldés
          </button>
        </div>

        {error && (
          <div className="error">
            <span>{error}</span>
            <button onClick={() => setError(null)}>✖</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Registration;
