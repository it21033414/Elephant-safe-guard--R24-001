import { M } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReportsService } from "src/app/services/reports.service";

@Component({
  selector: "app-insights-view",
  templateUrl: "./insights-view.component.html",
  styleUrls: ["./insights-view.component.scss"],
})
export class InsightsViewComponent {
  loading: boolean = false;

  cardData = {
    total_detection: 0,
    avg_detection_time: "60 min",
    last_detection: "1 hour ago",
  };

  public dailyDetectionTrends: any = {
    series: [
      {
        name: "Daily Detection Trends",
        data: [0, 0, 0, 0],
      },
    ],
    xaxis: {
      categories: [0, 0, 0, 0],
    },
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 300,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#19a463"], // Set stroke color to primary color
    },
    fill: {
      colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
      type: "solid",
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      // theme: "dark",
      // x: {
      //   show: false,
      // },
    },
  };

  public hourlyDetectionrateChart: any = {
    series: [
      {
        name: "Elephant Detection",
        data: [],
      },
    ],
    xaxis: {
      categories: [],
    },
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#19a463",
      toolbar: {
        show: false,
      },
      height: 300,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#19a463"],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };

  constructor(
    private reportsService: ReportsService,
    private msgHandelService: MsgHandelService
  ) {}

  ngOnInit(): void {
    this.getChartData();
  }

  ngAfterViewInit(): void {
    // this.getChartData();
  }

  getChartData() {
    this.loading = true;
    this.reportsService
      .getAllAnalysis("limit=10&page=1&column=0&order=desc")
      .subscribe(
        (response) => {
          if (response.status) {
            console.log("response", response);

            this.cardData = {
              total_detection: response?.data?.data?.totalDetectedCount,
              avg_detection_time: response?.data?.data?.avgTimeDifference,
              last_detection: response?.data?.data?.lastDetection,
            };

            this.setDailyDetectionTrends(response);

            this.setHourlyDetectionrateChart(response);
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          // show msg
          this.msgHandelService.handleError(error);
        }
      );
  }

  setDailyDetectionTrends(response: any) {
    this.dailyDetectionTrends = {
      series: [
        {
          name: "Daily Detections",
          data: response?.data?.data?.dailyDetectionCount?.detectionCounts,
        },
      ],
      xaxis: {
        categories: response?.data?.data?.dailyDetectionCount?.dates.map(
          (date: any) => this.convertDateToDefaultFormat(date)
        ),
      },
      chart: {
        type: "area",
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: "#adb0bb",
        toolbar: {
          show: false,
        },
        height: 300,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#19a463"], // Set stroke color to primary color
      },
      fill: {
        colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
        type: "solid",
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
      },
    };
  }

  setHourlyDetectionrateChart(response: any) {
    console.log("hours", response?.data?.data);
    console.log(
      "detectionCounts",
      response?.data?.data?.hourlyDetections?.detectionCounts
    );

    this.hourlyDetectionrateChart = JSON.parse(
      JSON.stringify({
        series: [
          {
            name: "Hourly Detection",
            data: response?.data?.data?.hourlyDetections?.detectionCounts,
          },
        ],
        xaxis: {
          categories: response?.data?.data?.hourlyDetections?.hours,
        },
        fill: {
          colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
          type: "solid",
          opacity: 0.7,
        },
        chart: {
          type: "bar",
          fontFamily: "'Plus Jakarta Sans', sans-serif;",
          foreColor: "#19a463",
          toolbar: {
            show: false,
          },
          height: 300,
          sparkline: {
            enabled: true,
          },
          group: "sparklines",
        },

        stroke: {
          curve: "smooth",
          width: 2,
          colors: ["#19a463", "#19a463", "#19a463"],
        },

        markers: {
          size: 0,
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
        },
      })
    );
  }

  convertDateToDefaultFormat(timestamp: any) {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  }
}
