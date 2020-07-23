import React, { Fragment, useEffect, useState } from 'react';
import { 
  Alert, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  Button, 
  ButtonGroup, 
  Form,
  FormGroup,
  Input,
  Label,
  CustomInput} from 'reactstrap';
import Summary from './Summary';
import Loader from '../../common/Loader';
import FalconCardHeader from '../../common/FalconCardHeader';
import useFakeFetch from '../../../hooks/useFakeFetch';
import uuid from 'uuid/v1';
import Datetime from 'react-datetime';
import createMarkup from '../../../helpers/createMarkup';
import { isIterableArray } from '../../../helpers/utils';

const AdvacnedReporting = () => {

  const [reportingStartDatetime, setReportingStartDatetime] = useState(null);
  const [reportingEndDatetime, setReportingEndDatetime] = useState(null);

  const labelClasses = 'ls text-uppercase text-600 font-weight-semi-bold mb-0';
  
  const eventCategories = [
    '选择分类',
    '空间数据日报',
    '设备数据日报',
    '租户数据日报',
    '门店数据日报',
    '车间数据日报',
    '辅助系统数据日报',
    '空间数据周报',
    '设备数据周报',
    '租户数据周报',
    '门店数据周报',
    '车间数据周报',
    '辅助系统数据周报',
    '空间数据月报',
    '设备数据月报',
    '租户数据月报',
    '门店数据月报',
    '车间数据月报',
    '辅助系统数据月报',
    '其它',
  ];
  const rawReports = [
    {
      id: uuid(),
      calendar: { month: 'Mar', day: '26' },
      title: "空间数据日报",
      additional: '生成时间: 2020-03-26 11:00AM<br/>文件格式: XLSX <br/>文件大小: 1.3 MB',
      to: '#'
    },
    {
      id: uuid(),
      calendar: { month: 'Jul', day: '21' },
      title: '设备数据日报',
      additional: '生成时间: 2020-07-21 11:00AM<br/>文件格式: DOCX <br/>文件大小: 1.3 MB',
      to: '#'
    },
    {
      id: uuid(),
      calendar: { month: 'Jul', day: '21' },
      title: '租户数据日报',
      additional: '生成时间: 2020-07-21 11:00AM<br/>文件格式: DOCX <br/>文件大小: 1.3 MB',
      to: '#',
      badge: {
        text: 'New',
        color: 'soft-success',
        pill: true
      }
    },
    {
      id: uuid(),
      calendar: { month: 'Jul', day: '31' },
      title: '门店数据日报',
      additional: '生成时间: 2020-07-31 11:00AM<br/>文件格式: XLSX <br/>文件大小: 1.3 MB',
      to: '#'
    },
    {
      id: uuid(),
      calendar: { month: 'Jul', day: '16' },
      title: '车间数据日报',
      additional: '生成时间: 2020-07-16 11:00AM<br/>文件格式: XLSX <br/>文件大小: 1.3 MB',
      to: '#'
    }
  ];
  const { loading, data: reports } = useFakeFetch(rawReports);
  
  return (
    <Fragment>
      <Card className="bg-light mb-3">
          <CardBody className="p-3">
            <Row form>
              <Col >
                <FormGroup className="form-group">
                  <Label className={labelClasses} for="reportingStartDatetime">
                  报告期开始
                  </Label>
                  <Datetime id='reportingStartDatetime' />
                </FormGroup>
              </Col>
              <Col >
                <FormGroup className="form-group">
                  <Label className={labelClasses} for="reportingEndDatetime">
                  报告期结束
                  </Label>
                  <Datetime id='reportingEndDatetime' />
                </FormGroup>
              </Col>
              <Col xs="auto">
                <FormGroup>
                  <br></br>
                  <ButtonGroup id="submit">
                    <Button color="success" >提交</Button>
                  </ButtonGroup>
                </FormGroup>
              </Col>
            </Row> 
          </CardBody>
      </Card>
      <Card>
        <FalconCardHeader title="高级报表">
          {isIterableArray(eventCategories) && (
            <Form inline>
              <CustomInput type="select" id="customSelectCategory" name="customSelectCategory" bsSize="sm">
                {eventCategories.map((option, index) => (
                  <option value={index} key={index}>
                    {option}
                  </option>
                ))}
              </CustomInput>
            </Form>
          )}
        </FalconCardHeader>
        <CardBody className="fs--1">
          {loading ? (
            <Loader />
          ) : isIterableArray(reports) ? (
            <Row>
              {reports.map(({ additional, ...rest }, index) => (
                <Col md={6} className="h-100" key={index}>
                  <Summary divider={reports.length !== index + 1} {...rest}>
                    <p className="text-1000 mb-0" dangerouslySetInnerHTML={createMarkup(additional)} />
                  </Summary>
                </Col>
              ))}
            </Row>
          ) : (
            <Alert color="info" className="mb-0">
              No reports found!
            </Alert>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default AdvacnedReporting;