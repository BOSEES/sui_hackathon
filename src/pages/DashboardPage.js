import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import { randomNum } from 'utils/demos';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

const genLineData2 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Gas',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          100,
          400,
          500,
          660,
          700,
          730,
          800,
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

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Transaction"
              // subtitle="This month"
              number="4000"
              color="secondary"
              progress={{
                value: 100,
                // label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Deploed Game"
              // subtitle="This month"
              number="6"
              // color="secondary"
              progress={{
                value: 100,
                // label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Users"
              // subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 100,
                // label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Swap Rate"
              // subtitle="This month"
              number="51%"
              // color="secondary"
              progress={{
                value: 51,
                // label: 'Last month',
              }}
            />
          </Col>
        </Row>

        <Row>
          {/* <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col> */}
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Coin Pair Pool</CardHeader>
              <CardBody>
                <Pie data={genPieData(2)} />
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Used Gas</CardHeader>
              <CardBody>
                <Line data={genLineData2({ fill: false }, { fill: false })} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            {/* <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem> */}
                {/* <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem> */}
              {/* </ListGroup>
            </Card> */}
          </Col>
        </Row>

        {/* <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup> */}
      </Page>
    );
  }
}
export default DashboardPage;
