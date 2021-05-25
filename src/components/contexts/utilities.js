export const FetchHook = (url) => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      async function getData() {
        setLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.slice(6, 39), "data");
          let tmp = data;
          setResult(data.slice(7, 39));
        } catch (error) {
          console.error("error :", error);
          setError(error.message);
        }
        setLoading(false);
      }
  
      getData();
    }, []);
    console.log(result, "result from fetchHook");
    return [result, error, isLoading];
  };