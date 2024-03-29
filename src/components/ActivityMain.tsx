import ActivityCard from "@/components/ActivityCard";
import useGetActivityQuery from "@/hooks/queries/useGetActivityQuery";
import { logger } from "@/utils/logger";
import _ from "lodash";
import { useMemo } from "react";

export default function ActivityMain() {
  logger.log("ActivityMain component render");

  const { data, isFetching, refetch } = useGetActivityQuery({
    enabled: false,
  });

  const fetchGetActivity = () => {
    refetch();
  };

  const ActivityCardView = useMemo(() => {
    if (_.isEmpty(data)) {
      return null;
    }

    return <ActivityCard activity={data.activity} price={data.price} />;
  }, [data]);

  if (isFetching) {
    return <progress className="progress progress-primary w-16" />;
  }

  return (
    <>
      {ActivityCardView}
      <button className="btn btn-wide" onClick={fetchGetActivity} type="button">
        뭐하지?
      </button>
    </>
  );
}
