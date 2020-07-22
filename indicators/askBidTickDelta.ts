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

input mode = {default delta, cumulative_total, cumulative_streak};

def TicksASK = tick_count(priceType = PriceType.ASK);
def TicksBID = tick_count(priceType = PriceType.BID);

def diff = (TicksASK - TicksBID);

def counter = if getDay() != getDay()[1] then 1 else counter[1] + 1;
def cumulativeDiff = if counter == 1 then diff else cumulativeDiff[1] + diff;

def diffChange = (diff > 0 and diff[1] <= 0) or (diff < 0 and diff[1] >= 0);
def cumulativeStreak = if diffChange then diff else cumulativeStreak[1] + diff;

def plotVal;
switch (mode) {
    case delta:
        plotVal = diff;
    case cumulative_total:
        plotVal = cumulativeDiff;
    case cumulative_streak:
        plotVal = cumulativeStreak;
}

plot askPlot = if diff >= 0 then plotVal else 0;
askPlot.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
askPlot.SetDefaultColor(Color.GREEN);
askPlot.HideBubble();
askPlot.SetLineWeight(4);

plot bidPlot = if diff < 0 then plotVal else 0;
bidPlot.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
bidPlot.SetDefaultColor(Color.RED);
bidPlot.HideBubble();
bidPlot.SetLineWeight(4);

