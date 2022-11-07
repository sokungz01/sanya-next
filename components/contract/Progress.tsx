import React from "react";

type Props = {
  step: number;
  progress: Array<string>;
};

function Progress({ step, progress }: Props) {
  const styles = {
    percent: {
      width: ((step / progress.length) * 100).toString() + "%",
    },
  };
  return (
    <div>
      <ul className="flex justify-between items-center px-4">
        {/* <li className="text-main">
        <span className="text-2xl">1</span> วันที่และสถานที่ทำสัญญา
      </li> */}
        {progress.map((p, i) => {
          return (
            <li key={i} className="text-main">
              <span className="text-2xl">{i + 1}</span>{" "}
              <span className="text-xl">{p}</span>
            </li>
          );
        })}
      </ul>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-main h-2.5 rounded-full "
          style={styles.percent}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
