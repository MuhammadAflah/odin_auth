import { analyticServerHostname, analyticServerPort, urlmap } from "./utils";

export const getDemographicsEndpoint = (
  sdate: string,
  stime: string,
  edate: string,
  etime: string,
  color: string,
  s_id: string,
  d_id: string,
  site_info: string,
  gender_criteria: string
): string => {
  return (
    `${urlmap()}://${analyticServerHostname}:${analyticServerPort}/api/demographics?` +
    `sdate=${sdate}` +
    `&stime=${stime}` +
    `&edate=${edate}` +
    `&etime=${etime}` +
    `&color=${color}` +
    // `&site=${s_id}` +
    // `&camera=${d_id}` +
    `&table=D${d_id}_S${s_id}_formatted` +
    `&siteInfo=${site_info}` +
    `&genderFilter=${gender_criteria}`
  );
};

export const getDemographicsData = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network Error:Code:emi:23");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
