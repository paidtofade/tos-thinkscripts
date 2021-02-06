# Created by @paidtofade in 2020
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

declare lower;

input length = 14;
input averageType = AverageType.WILDERS;

plot normalizedATR = (MovingAverage(averageType, TrueRange(high, close, low), length) / close) * 100.0;
normalizedATR.SetDefaultColor(GetColor(8));
