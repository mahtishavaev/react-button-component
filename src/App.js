import './App.scss';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h2 className='title'>Buttons</h2>
      <div className='container'>
        <div className='item'>
          <div className='description'>Default</div>
          <Button />
        </div>
        <div className='item'>
          <div className='description'>variant='outline'</div>
          <Button variant='outline' />
        </div>
        <div className='item'>
          <div className='description'>variant='text'</div>
          <Button variant='text' />
        </div>
        <div className='item'>
          <div className='description'>disableShadow</div>
          <Button disableShadow />
        </div>
        <div className='item'>
          <div className='description'>disabled</div>
          <Button disabled />
        </div>
        <div className='item'>
          <div className='description'>disabled</div>
          <div className='description'>variant='text'</div>
          <Button disabled variant='text' />
        </div>
        <div className='item'>
          <div className='description'>startIcon='local_grocery_store'</div>
          <div className='description'>variant='outline'</div>
          <Button startIcon='local_grocery_store' variant='outline' />
        </div>
        <div className='item'>
          <div className='description'>endIcon='assignment'</div>
          <div className='description'>variant='text'</div>
          <Button endIcon='assignment' variant='text' />
        </div>
        <div className='item'>
          <div className='description'>endIcon='event note'</div>
          <div className='description'>disableShadow</div>
          <Button endIcon='event_note' disableShadow/>
        </div>
        <div className='item'>
          <div className='description'>startIcon='input'</div>
          <div className='description'>color='primary'</div>
          <Button startIcon='input' color='primary'/>
        </div>
        <div className='item'>
          <div className='description'>endIcon='launch'</div>
          <div className='description'>color='secondary'</div>
          <Button endIcon='launch' color='secondary'/>
        </div>
        <div className='item'>
          <div className='description'>startIcon='queue_music'</div>
          <div className='description'>color='danger'</div>
          <Button startIcon='queue_music' color='danger'/>
        </div>
        <div className='item'>
          <div className='description'>size='sm'</div>
          <div className='description'>color='danger'</div>
          <Button size='sm' color='danger'>Small button</Button>
        </div>
        <div className='item'>
          <div className='description'>size='lg'</div>
          <div className='description'>color='primary'</div>
          <Button size='lg' color='primary' type='button'>Large button</Button>
        </div>

      </div>

    </div>
  );
}

export default App;
