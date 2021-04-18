# Created by @paidtofade in 2021
#
# If you find this indicator helpful, give me some love on twitter @paidtofade
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

declare upper;

input rangeType = { default ATR, ADR, StdDev };
input averageType = AverageType.SIMPLE;
input length = 5;
input multiplier = 1.0;
input baseLineType = { default Close, Open };
input showBaseLine = yes;

def dayOpen = open(period = AggregationPeriod.DAY);
def dayHigh = high(period = AggregationPeriod.DAY);
def dayLow = low(period = AggregationPeriod.DAY);
def dayClose = close(period = AggregationPeriod.DAY);

def dailyRange;
switch (rangeType) {
    case ATR:
      dailyRange = MovingAverage(
          averageType, TrueRange(dayHigh, dayClose, dayLow), length);
    case StdDev:
      dailyRange = StDev(dayClose, length) * 2.0;
    case ADR:
      dailyRange = MovingAverage(averageType, dayHigh - dayLow, length);
}

def baseLineVal = if baseLineType == baseLineType.Open then dayOpen else dayClose[1];

plot rangeHigh = baseLineVal + ((dailyRange[1] / 2) * multiplier);
plot rangeLow = baseLineVal - ((dailyRange[1] / 2) * multiplier);
plot baseLine = if showBaseLine then baseLineVal else Double.NaN;

rangeHigh.SetDefaultColor(Color.GREEN);
rangeLow.SetDefaultColor(Color.GREEN);
baseLine.SetDefaultColor(Color.CYAN);
