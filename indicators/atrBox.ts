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

input length = 21;
input showOpen = yes;
input averageType = AverageType.SIMPLE;

def dailyATR = MovingAverage(averageType, TrueRange(high(period = AggregationPeriod.DAY), close(period = AggregationPeriod.DAY), low(period = AggregationPeriod.DAY)), length);

def todayOpen = open(period = AggregationPeriod.DAY);
plot atrHigh = todayOpen + (dailyATR/2); 
plot atrLow = todayOpen - (dailyATR/2);
plot openLine = if showOpen then todayOpen else Double.NaN;

atrHigh.SetDefaultColor(Color.GREEN);
atrLow.SetDefaultColor(Color.GREEN);
openLine.SetDefaultColor(Color.CYAN);
