import React, { useEffect, useState } from 'react';
import { getMsg, Msg } from '../Services/dsaService';
import "./dsapathway.css";

const DsaPathway = () => {
  const [msg, setMsg] = useState<Msg>({msg: "Default msg"});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const data = await getMsg(); // Use the service function
        setMsg(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch msg');
        setLoading(false);
      }
    };

    fetchMsg();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="container">
        <h1>API test</h1>
        <h2>{msg.msg}</h2>
      </div>
    </>
  );
};

export default DsaPathway;
