import * as dotenv from "dotenv";
dotenv.config();

export const analyticServerHostname = process.env.ANALYTICS_SERVER_HOSTNAME;
export const analyticServerPort = process.env.ANALYTICS_SERVER_PORT;
export const dataServerHostname = process.env.DATA_SERVER_HOSTNAME;
export const dataServerPort = process.env.DATA_SERVER_PORT;

export const start_time = process.env.START_TIME;
export const end_time = process.env.END_TIME;
export const s_id = process.env.S_ID;
export const d_id = process.env.D_ID;
export const site_info = process.env.SITE_INFO;
export const genderCriteria = process.env.GENDER_CRITERIA;
export const dailyTarget = process.env.DAILY_TARGET;

export const ssl_mode = process.env.SSL_MODE;
export const staff_color = process.env.STAFF_COLOR;

export const urlmap = () => (ssl_mode ? "https" : "http");
