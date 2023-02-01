import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';

import Page from 'components/Page';
import Games from "../assets/game-data/games.json"

// const MONTHS = ["0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs","0xWAs"];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// usercount, playercount, nftitemsales, swap pool
const genLineData1 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Nft Item Sales',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          20000,
          13800,
          25000,
          19000,
          23000,
          30000,
          24873,
          24302,
          14000,
          16000,
          17000,
        ],
        ...moreData,
      },
      // {
      //   label: 'Dataset 2',
      //   backgroundColor: getColor('secondary'),
      //   borderColor: getColor('secondary'),
      //   borderWidth: 1,
      //   data: [
      //     randomNum(),
      //     randomNum(),
      //     randomNum(),
      //     randomNum(),
      //     randomNum(),
      //     randomNum(),
      //     randomNum(),
      //   ],
      //   ...moreData2,
      // },
    ],
  };
};
const genLineData2 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Count',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          25000,
          30000,
          24873,
          17000,
          20000,
          16000,
          19000,
          14000,
          23000,
          13800,
          24302,
        ],
        ...moreData2,
      },
    ],
  };
};

const genLineData3 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Play Count',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          300,
          200,
          200,
          120,
          300,
          300,
          300,
          200,
          120,
          200,
          120,
        ],
        ...moreData2,
      },
    ],
  };
};

const genPieData = (num) => {
  let data = [];

  for (let i = 0; i < num; i++) {
    data.push(randomNum())
  }

  return {
    datasets: [
      {
        data: data,
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Aptos', 'GCT'],
  };
};

const ChartPage = ({gameId}) => {
  const targetGame = Games.games.filter((game, i) => {
    if (game.game_id == gameId) {
      return game
    }
  }) 

  return (
    <Page title={`${targetGame[0].title}`} breadcrumbs={[{ name: `${targetGame[0].title}`, active: true }]}>
      <Row>
      <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>NFT Market Sales</CardHeader>
            <CardBody>
              <Bar data={genLineData1()} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Play Count</CardHeader>
            <CardBody>
              <Bar data={genLineData2({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* <Row>
      <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Doughnut</CardHeader>
            <CardBody>
              <Doughnut data={genPieData(4)} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Line</CardHeader>
            <CardBody>
              <Line data={genLineData2({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row> */}

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>User Count</CardHeader>
            <CardBody>
              <Line
                data={genLineData2()}
                options={{
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Value',
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Aptos : GCT Pool</CardHeader>
            <CardBody>
              <Pie data={genPieData(2)} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
    
  );
};

export default ChartPage;
