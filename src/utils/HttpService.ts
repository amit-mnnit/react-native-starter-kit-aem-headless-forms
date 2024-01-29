import { USE_LOCAL_JSON, FORM_API, AEM_URL, AEM_FORM_PATH } from '../constants';
import localFormJson from '../form-definitions/demo.form.json';

export const fetchJson = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4=',
    },
  });
  const data = await res.json();
  return data;
};

export const getFormDefinition = async () => {
  if (USE_LOCAL_JSON) {
    return localFormJson;
  } else {
    let url = FORM_API;
    if (!url) {
      const SUFFIX = "jcr:content/guideContainer.model.json";
      url = `${AEM_URL}/${AEM_FORM_PATH}/${SUFFIX}`;
    }
    const res = await fetchJson(url);
    return res;
  }
}
