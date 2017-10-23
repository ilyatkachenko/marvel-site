import { Component, OnInit, Input } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartName: string;

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Heroes powers rating'
    },
    xAxis: {
      categories: [
        'Intelligence',
        'Strength',
        'Speed',
        'Durability',
        'Energy Projection',
        'Fighting Skills'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      max: 7,
      title: {
        text: 'Rate'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Hawkeye',
      data: [3, 2, 2, 2, 1, 6]

    }, {
      name: 'Hulk',
      data: [6, 7, 3, 7, 5, 4]

    }, {
      name: 'Captain America',
      data: [3, 3, 2, 3, 1, 6]

    }, {
      name: 'Black Widow',
      data: [3, 3, 2, 3, 3, 6]

    }, {
      name: 'Iron Man',
      data: [6, 6, 5, 6, 6, 4]

    }, {
      name: 'Ihor',
      data: [2, 7, 7, 6, 6, 4]

    }]
  });

  hawk = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 18.8],
        ['Strength', 12.5],
        {
          name: 'Speed',
          y: 12.5,
          sliced: true,
          selected: true
        },
        ['Durability', 12.5],
        ['Energy Projection', 6.25],
        ['Fighting Skills', 38.4]
      ]
    }]
  });

  hulk = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 18.8],
        ['Strength', 21.8],
        {
          name: 'Speed',
          y: 9.43,
          sliced: true,
          selected: true
        },
        ['Durability', 21.8],
        ['Energy Projection', 15.6],
        ['Fighting Skills', 12.5]
      ]
    }]
  });

  captain = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 16.6],
        ['Strength', 16.6],
        {
          name: 'Speed',
          y: 11.1,
          sliced: true,
          selected: true
        },
        ['Durability', 16.6],
        ['Energy Projection', 5.5],
        ['Fighting Skills', 33.3]
      ]
    }]
  });

  widow = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 15.1],
        ['Strength', 15.1],
        {
          name: 'Speed',
          y: 10,
          sliced: true,
          selected: true
        },
        ['Durability', 15.1],
        ['Energy Projection', 15.1],
        ['Fighting Skills', 30.3]
      ]
    }]
  });

  ironMan = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 18.1],
        ['Strength', 18.1],
        {
          name: 'Speed',
          y: 15.1,
          sliced: true,
          selected: true
        },
        ['Durability', 18.1],
        ['Energy Projection', 18.1],
        ['Fighting Skills', 12.1]
      ]
    }]
  });

  thor = new Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Hero powers rating'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Power rating',
      data: [
        ['Intelligence', 6.25],
        ['Strength', 21.8],
        {
          name: 'Speed',
          y: 21.8,
          sliced: true,
          selected: true
        },
        ['Durability', 18.7],
        ['Energy Projection', 18.7],
        ['Fighting Skills', 12.5]
      ]
    }]
  });
}
