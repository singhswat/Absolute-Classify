const IssuePanel = () => {
  const context = useProductContext();
  const projectKey = context.platformContext.projectKey;

  const [classification, setClassification] = useState("");

  useEffect(async () => {
    const saved = await storage.get(`classification-${projectKey}`);
    if (saved) setClassification(saved);
  }, []);

  const getLabel = () => {
    if (!classification) return "Not Set";

    if (classification === "Confidential") return "🔴 Confidential";
    if (classification === "Internal") return "🟠 Internal";
    if (classification === "Public") return "🟢 Public";

    return classification;
  };

  return (
    <Fragment>
      <Text>📌 Classification</Text>
      <Text>{getLabel()}</Text>
    </Fragment>
  );
};