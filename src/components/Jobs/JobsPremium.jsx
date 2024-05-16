import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsPremium } from "../../redux/actions/Jobs";

import { Link } from "react-router-dom";
import JobsPremiumCard from "./JobsPremiumCard";
import { getInformationJobsPremium } from "../../redux/actions/ProfileInformationActions";
import { Image } from "react-bootstrap";

const JobsPremium = () => {
  const dispatch = useDispatch();
  const premium = useSelector((state) => state.Jobs.premiumJobs);
  console.log(premium);
  const information = useSelector((state) => state.ProfileInformation.informationJobPrem);
  console.log(premium);
  useEffect(() => {
    dispatch(getJobsPremium());
  }, []);
  useEffect(() => {
    dispatch(getInformationJobsPremium());
  }, []);

  return (
    <>
      {" "}
      <div className=" bg-white p-3 rounded-top-3 border border-1 exploreOpportunity mt-3">
        <h2 className="mb-0 mt-2">Offerte Premium</h2>
        <p className="mb-0">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        <Image src={information.image} width={50} height={50} />
        {premium.map((prem) => {
          console.log(prem);
          return (
            <JobsPremiumCard
              role={prem.title}
              company={prem.company_name}
              location={prem.candidate_required_location}
              url={prem.url}
              key="1"
            />
          );
        })}
      </div>
      <div className=" border border-top-0 link rounded-bottom ">
        <Link className="text-decoration-none p-2 text-black " to="">
          Mostra tutto
          <span className="ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -6.5 38 38" version="1.1">
              <g id="icons" stroke="none" fill="none">
                <g
                  id="ui-gambling-website-lined-icnos-casinoshunter"
                  transform="translate(-1511.000000, -158.000000)"
                  fill="#1C1C1F"
                >
                  <g id="1" transform="translate(1350.000000, 120.000000)">
                    <path
                      d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                      id="right-arrow"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
};
export default JobsPremium;
