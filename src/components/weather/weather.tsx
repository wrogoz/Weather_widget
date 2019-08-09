import * as React from 'react';
import styled from 'styled-components';
import {SimpleMenu, MenuItem} from '@rmwc/menu';
import {Elevation} from '@rmwc/elevation';
import {DaysList} from './weatherComponents/daysList';
import {DateChoiceComp} from './weatherComponents/dateChoiceComp';
import store, {Store} from '../../store/store';
import {observer} from 'mobx-react';
import axios from 'axios';

interface WeatherProps {
  store: Store;
}

@observer
export class Weather extends React.Component<WeatherProps, {}> {
  selectCity(event: any) {
    this.props.store.city = event;
    this.props.store.getDataForCity();
  }

  componentDidMount() {
    // Api GET city list

    
    axios.get('https://dev-weather-api.azurewebsites.net/api/city')
         .then((res: any) => {
            this.props.store.cityNames = res.data;
            this.props.store.cityList = this.props.store.cityNames.map(
            (el: any, id: number) => {
                return (
                <MenuItem
                    onClick={this.selectCity.bind(this, `${el.name}`)}
                    key={id}
                >
                    {el.name}
                </MenuItem>
                );
            }
            );
        })

      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <WeatherContainer z={2}>
        <TopBox>
          <SimpleMenu handle={<CityName>{this.props.store.city}</CityName>}>
            {this.props.store.cityList}
          </SimpleMenu>
          <Date>{this.props.store.dateToDisplay}</Date>
          <Date>Overcast</Date>
        </TopBox>
        <DateChoiceComp store={store} />
        <DaysList store={store} />
      </WeatherContainer>
    );
  }
}

const WeatherContainer = styled(Elevation)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding-top: 5%;
  max-width: 570px;
`;

const TopBox = styled.div`
  padding-left: 5%;
`;

const CityName = styled.div`
  font-size: 36px;
  cursor: pointer;
  @media (min-width: 340px) {
    font-size: 40px;
  }
`;
const Date = styled.div`
  color: #666;
  font-size: 14px;
`;
