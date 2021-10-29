import {getMockData} from "../../data/return_data";

export default function handler(req, res) {
  res.status(200).json(getMockData());
}
