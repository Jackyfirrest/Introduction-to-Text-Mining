import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

const startSearch = async () => {
  return await instance.get("/apps").then((res) => {
    return res.data;
  });
};

const searchKeyword = async (keyword) => {
  return await instance.get(`/apps/${keyword}`).then((res) => {
    console.log("search keyword resdata", res.data);
    return res.data;
  });
};

const getAppContent = async(appID) => {
  return await instance.get(`/apps/content/${appID}`).then((res) => {
    //console.log('get app data res', res.data);
    return res.data;
  })
}

const getAppAspect = async(appID, aspect) => {
  return await instance.get(`/apps/aspect/${appID}/${aspect}`).then((res) => {
    return res.data;
  })
}

const getPredictApp = async(review) => {
  return await instance.post(`/predict`, { review }).then((res) => {
    console.log('predict response', res.data);
    return res.data;
  })
}

export { startSearch, searchKeyword, getAppContent, getAppAspect, getPredictApp };
