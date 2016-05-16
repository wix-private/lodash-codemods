import plugin from '../lib/this-arg-removal';
import {testPlugin, with_} from './helpers/jscodeshift-wrapper';

const {test, testUnchanged} = testPlugin(plugin);

test(with_('_.callback(a, b)'), with_('_.callback(_.bind(a, b))'));
test(with_('_.clone(a, b, c, d)'), with_('_.clone(a, b, _.bind(c, d))'));
test(with_('_.cloneDeep(a, b, c)'), with_('_.cloneDeep(a, _.bind(b, c))'));
test(with_('_.countBy(a, b, c)'), with_('_.countBy(a, _.bind(b, c))'));
test(with_('_.dropRightWhile(a, b, c)'), with_('_.dropRightWhile(a, _.bind(b, c))'));
test(with_('_.dropWhile(a, b, c)'), with_('_.dropWhile(a, _.bind(b, c))'));
test(with_('_.every(a, b, c)'), with_('_.every(a, _.bind(b, c))'));
test(with_('_.filter(a, b, c)'), with_('_.filter(a, _.bind(b, c))'));
test(with_('_.find(a, b, c)'), with_('_.find(a, _.bind(b, c))'));
test(with_('_.findIndex(a, b, c)'), with_('_.findIndex(a, _.bind(b, c))'));
test(with_('_.findKey(a, b, c)'), with_('_.findKey(a, _.bind(b, c))'));
test(with_('_.findLast(a, b, c)'), with_('_.findLast(a, _.bind(b, c))'));
test(with_('_.findLastIndex(a, b, c)'), with_('_.findLastIndex(a, _.bind(b, c))'));
test(with_('_.findLastKey(a, b, c)'), with_('_.findLastKey(a, _.bind(b, c))'));
test(with_('_.forEach(a, b, c)'), with_('_.forEach(a, _.bind(b, c))'));
test(with_('_.forEachRight(a, b, c)'), with_('_.forEachRight(a, _.bind(b, c))'));
test(with_('_.forIn(a, b, c)'), with_('_.forIn(a, _.bind(b, c))'));
test(with_('_.forInRight(a, b, c)'), with_('_.forInRight(a, _.bind(b, c))'));
test(with_('_.forOwn(a, b, c)'), with_('_.forOwn(a, _.bind(b, c))'));
test(with_('_.forOwnRight(a, b, c)'), with_('_.forOwnRight(a, _.bind(b, c))'));
test(with_('_.groupBy(a, b, c)'), with_('_.groupBy(a, _.bind(b, c))'));
test(with_('_.indexBy(a, b, c)'), with_('_.indexBy(a, _.bind(b, c))'));
test(with_('_.isEqual(a, b, c, d)'), with_('_.isEqual(a, b, _.bind(c, d))'));
test(with_('_.isMatch(a, b, c, d)'), with_('_.isMatch(a, b, _.bind(c, d))'));
test(with_('_.map(a, b, c)'), with_('_.map(a, _.bind(b, c))'));
test(with_('_.map(array, iteratee, this)'), with_('_.map(array, _.bind(iteratee, this))'));
test(with_('_.mapKeys(a, b, c)'), with_('_.mapKeys(a, _.bind(b, c))'));
test(with_('_.mapValues(a, b, c)'), with_('_.mapValues(a, _.bind(b, c))'));
test(with_('_.max(a, b, c)'), with_('_.max(a, _.bind(b, c))'));
test(with_('_.min(a, b, c)'), with_('_.min(a, _.bind(b, c))'));
test(with_('_.partition(a, b, c)'), with_('_.partition(a, _.bind(b, c))'));
test(with_('_.reduce(a, b, c, d)'), with_('_.reduce(a, b, _.bind(c, d))'));
test(with_('_.reduceRight(a, b, c, d)'), with_('_.reduceRight(a, b, _.bind(c, d))'));
test(with_('_.reject(a, b, c)'), with_('_.reject(a, _.bind(b, c))'));
test(with_('_.remove(a, b, c)'), with_('_.remove(a, _.bind(b, c))'));
test(with_('_.remove(array, predicate, this)'), with_('_.remove(array, _.bind(predicate, this))'));
test(with_('_.some(a, b, c)'), with_('_.some(a, _.bind(b, c))'));
test(with_('_.sortBy(a, b, c)'), with_('_.sortBy(a, _.bind(b, c))'));
test(with_('_.sortedIndex(a, b, c, d)'), with_('_.sortedIndex(a, b, _.bind(c, d))'));
test(with_('_.sortedLastIndex(a, b, c, d)'), with_('_.sortedLastIndex(a, b, _.bind(c, d))'));
test(with_('_.sum(a, b, c)'), with_('_.sum(a, _.bind(b, c))'));
test(with_('_.takeRightWhile(a, b, c)'), with_('_.takeRightWhile(a, _.bind(b, c))'));
test(with_('_.takeWhile(a, b, c)'), with_('_.takeWhile(a, _.bind(b, c))'));
test(with_('_.tap(a, b, c)'), with_('_.tap(a, _.bind(b, c))'));
test(with_('_.thru(a, b, c)'), with_('_.thru(a, _.bind(b, c))'));
test(with_('_.times(a, b, c)'), with_('_.times(a, _.bind(b, c))'));
test(with_('_.transform(a, b, c, d)'), with_('_.transform(a, b, _.bind(c, d))'));
test(with_('_.uniq(a, b, c, d)'), with_('_.uniq(a, b, _.bind(c, d))'));
test(with_('_.unzipWith(a, b, c)'), with_('_.unzipWith(a, _.bind(b, c))'));

testUnchanged(with_('_.remove()'));
testUnchanged(with_('_.remove(array)'));
testUnchanged(with_('_.remove(array, predicate)'));
testUnchanged(with_('_.map()'));
testUnchanged(with_('_.map(array)'));
testUnchanged(with_('_.map(array, iteratee)'));
