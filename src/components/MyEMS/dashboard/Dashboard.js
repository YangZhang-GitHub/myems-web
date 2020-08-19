import React, { Fragment, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Col, Row } from 'reactstrap';
import CardSummary from '../common/CardSummary';
import LineChart from '../common/LineChart';
import { toast } from 'react-toastify';
import SharePie from '../common/SharePie';
import loadable from '@loadable/component';
import { withTranslation } from 'react-i18next';


const ChildSpacesTable = loadable(() => import('../common/ChildSpacesTable'));

const Dashboard = ({ t }) => {
  // State

  const spaceLineChartLabels = [
    '2020-07-01',
    '2020-07-02',
    '2020-07-03',
    '2020-07-04',
    '2020-07-05',
    '2020-07-06',
    '2020-07-07',
    '2020-07-08',
    '2020-07-09',
    '2020-07-10',
    '2020-07-11',
    '2020-07-12'
  ];

  const spaceLineChartData = {
    a: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    b: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    c: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    d: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
  };


  const spaceLineChartOptions = [
    { value: 'a', label: '电' },
    { value: 'b', label: '自来水' },
    { value: 'c', label: '天然气' },
    { value: 'd', label: '二氧化碳排放' }];

  const parameterLineChartLabels = [
    '2020-07-01',
    '2020-07-02',
    '2020-07-03',
    '2020-07-04',
    '2020-07-05',
    '2020-07-06',
    '2020-07-07',
    '2020-07-08',
    '2020-07-09',
    '2020-07-10',
    '2020-07-11',
    '2020-07-12'
  ];

  const parameterLineChartData = {
    a: [40, 31, 36, 32, 27, 32, 34, 26, 25, 24, 25, 30],
    b: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    c: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    d: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    e: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
  };

  const parameterLineChartOptions = [
    { value: 'a', label: '室外温度' },
    { value: 'b', label: '相对湿度' },
    { value: 'c', label: '电费率' },
    { value: 'd', label: '自来水费率' },
    { value: 'e', label: '天然气费率' }];

  const costshare = [
    { id: 1, value: 5890863, name: '电', color: '#2c7be5' },
    { id: 2, value: 29878, name: '自来水', color: '#27bcfd' },
    { id: 3, value: 9887, name: '天然气', color: '#d8e2ef' }
  ];
  const tceshare = [
    { id: 1, value: 5890863 / 8135.56, name: '电', color: '#2c7be5' },
    { id: 2, value: 29878 / 1000, name: '自来水', color: '#27bcfd' },
    { id: 3, value: 9887 / 751.8, name: '天然气', color: '#d8e2ef' }
  ];
  const co2share = [
    { id: 1, value: (5890863 / 8135.56) * 0.67, name: '电', color: '#2c7be5' },
    { id: 2, value: (29878 / 1000) * 0.67, name: '自来水', color: '#27bcfd' },
    { id: 3, value: (9887 / 751.8) * 0.67, name: '天然气', color: '#d8e2ef' }
  ];

  const childSpacesTableData = [
    {
      id: 1,
      name: '公区',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    },
    {
      id: 2,
      name: '车库',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    },
    {
      id: 3,
      name: '租区',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    }
  ];
  const childSpacesTableColumns = [{
    dataField: 'name',
    text: '子空间',
    sort: true
  }, {
    dataField: 'electricity',
    text: '电 (kWh)',
    sort: true
  }, {
    dataField: 'water',
    text: '自来水 (M3)',
    sort: true
  }, {
    dataField: 'naturalgas',
    text: '天然气 (M3)',
    sort: true
  }, {
    dataField: 'co2',
    text: '二氧化碳排放 (T)',
    sort: true
  }];
  useEffect(() => {
    toast(
      <Fragment>
        {t("Welcome to")} <strong>MyEMS</strong>!<br />
        {t("The Leading Free and Open Source Energy Management System")}
      </Fragment>
    );
  }, []);

  return (
    <Fragment>
      <div className="card-deck">
        <CardSummary rate="-0.23%" title={t('CATEGORY Input of This Year UNIT', {'CATEGORY': '电', 'UNIT': '(kWh)'})} 
        color="success" footnote={t('Per Unit Area')} footvalue={5890863 / 1000} footunit="(kWh/M2)" >
          <CountUp end={5890863} duration={2} prefix="" separator="," decimal="." decimals={2} />
        </CardSummary>
        <CardSummary rate="0.0%" title={t('CATEGORY Input of This Year UNIT', {'CATEGORY': '自来水', 'UNIT': '(M3)'})}
         color="info" footnote={t('Per Unit Area')} footvalue={29878 / 1000} footunit="(M3/M2)" >
          <CountUp end={29878} duration={2} prefix="" separator="," decimal="." decimals={2} />
        </CardSummary>
        <CardSummary rate="0.0%" title={t('CATEGORY Input of This Year UNIT', {'CATEGORY': '天然气', 'UNIT': '(M3)'})}
         color="info" footnote={t('Per Unit Area')} footvalue={9887 / 1000} footunit="(M3/M2)" >
          <CountUp end={9887} duration={2} prefix="" separator="," decimal="." decimals={2} />
        </CardSummary>
        <CardSummary rate="+9.54%" title={t('CATEGORY Input of This Year UNIT', {'CATEGORY': '吨标准煤', 'UNIT': '(TCE)'})} 
        color="warning" footnote={t('Per Unit Area')} footvalue={(5890863 / 8135.56 + 9887 / 751.8) / 1000} footunit="(TCE/M2)" >
          <CountUp end={5890863 / 8135.56 + 9887 / 751.8} duration={2} prefix="" separator="," decimal="." decimals={2} />
        </CardSummary>
        <CardSummary rate="+9.54%" title={t('CATEGORY Input of This Year UNIT', {'CATEGORY': '二氧化碳排放', 'UNIT': '(T)'})}
         color="warning" footnote={t('Per Unit Area')} footvalue={((5890863 / 8135.56 + 9887 / 751.8) * 0.67) / 1000} footunit="(T/M2)" >
          <CountUp end={(5890863 / 8135.56 + 9887 / 751.8) * 0.67} duration={2} prefix="" separator="," decimal="." decimals={2} />
        </CardSummary>
      </div>
      <div className="card-deck">
        <CardSummary rate="-0.23%" title={t('CATEGORY Cost of This Year UNIT', {'CATEGORY': '电', 'UNIT': '(RMB)'})}
         color="success" footnote={t('Per Unit Area')} footvalue={5890863 / 1000} footunit="(RMB/M2)" >
          <CountUp end={5890863} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
        <CardSummary rate="0.0%" title={t('CATEGORY Cost of This Year UNIT', {'CATEGORY': '自来水', 'UNIT': '(RMB)'})}
         color="info" footnote={t('Per Unit Area')} footvalue={29878 / 1000} footunit="(RMB/M2)" >
          <CountUp end={29878} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
        <CardSummary rate="+9.54%" title={t('CATEGORY Cost of This Year UNIT', {'CATEGORY': '天然气', 'UNIT': '(RMB)'})}
         color="warning" footnote={t('Per Unit Area')} footvalue={43594 / 1000} footunit="(RMB/M2)" >
          <CountUp end={43594} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
      </div>
      <Row noGutters>
        <Col className="mb-3 pr-lg-2 mb-3">
          <SharePie data={costshare} title={t('Cost by Energy Category')} />
        </Col>
        <Col className="mb-3 pr-lg-2 mb-3">
          <SharePie data={tceshare} title={t('Ton of Standard Coal by Energy Category')} />
        </Col>
        <Col className="mb-3 pr-lg-2 mb-3">
          <SharePie data={co2share} title={t('Carbon Dioxide Emissions by Energy Category')} />
        </Col>
      </Row>
      <LineChart reportingTitle={t('Input of This Month CATEGORY VALUE UNIT', {'CATEGORY': '电', 'VALUE': 764.39, 'UNIT': '(kWh)'})}
        baseTitle=''
        labels={spaceLineChartLabels}
        data={spaceLineChartData}
        options={spaceLineChartOptions}>
      </LineChart>

      <LineChart reportingTitle={t('Related Parameters')}
        baseTitle=''
        labels={parameterLineChartLabels}
        data={parameterLineChartData}
        options={parameterLineChartOptions}>
      </LineChart>
      <ChildSpacesTable data={childSpacesTableData} title={t('Child Spaces Data of This Month')} columns={childSpacesTableColumns}>
      </ChildSpacesTable>

    </Fragment>
  );
};

export default withTranslation()(Dashboard);
