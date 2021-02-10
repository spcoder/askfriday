import redBudCovid from '../../../server/functions/redBudCovid';

test('returns information', () => {
  const get = jest.fn(() => JSON.stringify({
    'lastUpdatedDate': { 'year': 2020, 'month': 12, 'day': 28 },
    'zip_values': [
      { 'zip': '62278', 'confirmed_cases': 46, 'total_tested': 370 }
    ]
  }));
  const ok = jest.fn();
  const http = { get };
  const response = { ok };
  const namespace = { http, response };
  expect(redBudCovid(namespace));
  expect(http.get).toBeCalledWith('https://idph.illinois.gov/DPHPublicInformation/api/COVID/GetZip');
  expect(response.ok).toBeCalledWith('{"asciidoc":"\\n[float]\\n= COVID-19\\n=== Red Bud, Illinois\\n*46* confirmed cases +\\nAs of 12/28/2020\\n    "}');
});
