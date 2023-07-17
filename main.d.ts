type getHomeResponse = {
  json: (arg0: {
    appName: string | undefined;
    appVersion: string | undefined;
    options: string[];
  }) => void;
};
type getAnswersResponse = { json: (arg0: { todo: string }) => void };
type getQuestionsResponse = { json: (arg0: { todo: string; }) => void};