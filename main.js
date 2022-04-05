import axios from 'axios'
import cheerio from 'cheerio'

// Main execution

// Fetch available jobs
const res = await axios.get('https://linusmediagroup.com/jobs')

const $ = cheerio.load(res.data);

let jobPosts = []
console.log('Available job posts:')
$('#content>div>div>div>div>div>h2>strong').each((i, val) => {
    console.log(val.firstChild.data)
    jobPosts.push(val.firstChild.data)
})
