import { useState, useEffect } from "react";
import { database } from "./firebase";

function GetData(collection) {
  const [docs, setDocs] = useState([]);
  const [document, setDocument] = useState([]);
  const [top, settop] = useState([]);

  useEffect(() => {
    const unSubscribe = database
      .collection(collection)
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setDocument(documents);
        settop(documents);
      });
    return () => unSubscribe();
  }, [collection]);

  return { docs, document, top };
}

export default GetData;
