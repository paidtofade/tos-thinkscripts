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

DefineGlobalColor("lowerBand", Color.CYAN);
DefineGlobalColor("upperBand", Color.CYAN);

input price = close;
input displace = 0;
input length = 20;
input innerBand = 1.0;
input outerBand = 2.0;
input averageType = AverageType.Simple;

def sDev = stdev(data = price[-displace], length = length);

def MidLine = MovingAverage(averageType, data = price[-displace], length = length);
def innerLower = MidLine - innerBand * sDev;
def outerLower = MidLine - outerBand * sDev;
def innerUpper = MidLine + innerBand * sDev;
def outerUpper = MidLine + outerBand * sDev;

AddCloud(innerLower, outerLower, GlobalColor("lowerBand"), GlobalColor("lowerBand"));
AddCloud(innerUpper, outerUpper, GlobalColor("upperBand"), GlobalColor("upperBand"));
